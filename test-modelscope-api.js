#!/usr/bin/env node

// ModelScope API 测试脚本
// 使用环境变量提供 API Key
const API_KEY = process.env.MODELSCOPE_API_KEY || '';

if (!API_KEY) {
  console.error('❌ 错误: 未设置 MODELSCOPE_API_KEY 环境变量');
  console.error('');
  console.error('使用方法:');
  console.error('  MODELSCOPE_API_KEY=your-api-key node test-modelscope-api.js');
  console.error('');
  console.error('或者:');
  console.error('  export MODELSCOPE_API_KEY=your-api-key');
  console.error('  node test-modelscope-api.js');
  process.exit(1);
}

// 模拟一些 Git 提交记录
const testCommits = [
  { hash: '3c305a8', subject: '添加 amd64-v3 优化版本构建支持', author: 'doumao', date: '2 hours ago' },
  { hash: '83c0819', subject: '添加代理检测提示和sudo -E使用说明', author: 'doumao', date: '3 hours ago' },
  { hash: '59d5b01', subject: '优先使用用户设置的代理，而不是加速镜像', author: 'doumao', date: '5 hours ago' },
  { hash: '43af80e', subject: '添加下载前提示：告知用户可使用代理或加速镜像', author: 'doumao', date: '6 hours ago' },
  { hash: 'f9b0ed1', subject: '修复：移除stderr重定向，正确显示下载进度条', author: 'doumao', date: '8 hours ago' }
];

async function testModelScopeAPI() {
  console.log('🧪 开始测试 ModelScope API...\n');
  console.log(`📝 测试提交记录数量: ${testCommits.length}`);
  console.log(`🔑 API Key: ${API_KEY.substring(0, 10)}...${API_KEY.substring(API_KEY.length - 10)}\n`);

  try {
    console.log('📡 发送 API 请求...');

    const response = await fetch('https://api-inference.modelscope.cn/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: 'Qwen/Qwen2.5-Coder-32B-Instruct',
        messages: [
          {
            role: 'system',
            content: '你是一个专业的软件版本发布助手，擅长分析 Git 提交记录并生成简洁的版本总结。'
          },
          {
            role: 'user',
            content: `请分析以下 Git 提交记录，生成一个简洁的版本发布总结（3-5 个要点，每个要点不超过 20 字）。只输出要点列表，不要其他内容。

提交记录（共 ${testCommits.length} 个）：
${testCommits.map(c => `- ${c.subject} (${c.author}, ${c.date})`).join('\n')}

要求：
1. 用中文输出
2. 提取主要功能变更、修复和优化
3. 每个要点以 "- " 开头
4. 合并相似的提交
5. 突出重要变更
6. 按重要性排序`
          }
        ],
        temperature: 0.7,
        max_tokens: 1024,
        stream: false
      })
    });

    console.log(`📊 响应状态: ${response.status} ${response.statusText}\n`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API 请求失败:');
      console.error(`   状态码: ${response.status}`);
      console.error(`   错误信息: ${errorText}`);
      return false;
    }

    const data = await response.json();

    // 检查响应格式
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('❌ API 响应格式异常:');
      console.error(JSON.stringify(data, null, 2));
      return false;
    }

    const summary = data.choices[0].message.content.trim();

    // 清理可能的重复 "- " 前缀
    const cleanedSummary = summary.replace(/^- - /gm, '- ');

    console.log('✅ API 调用成功!\n');
    console.log('📋 AI 生成的总结（原始）:');
    console.log('─'.repeat(60));
    console.log(summary);
    console.log('─'.repeat(60));
    console.log('');

    console.log('📋 AI 生成的总结（清理后）:');
    console.log('─'.repeat(60));
    console.log(cleanedSummary);
    console.log('─'.repeat(60));
    console.log('');

    // 显示 token 使用情况
    if (data.usage) {
      console.log('📊 Token 使用情况:');
      console.log(`   输入 tokens: ${data.usage.prompt_tokens}`);
      console.log(`   输出 tokens: ${data.usage.completion_tokens}`);
      console.log(`   总计 tokens: ${data.usage.total_tokens}`);
      console.log('');
    }

    // 显示完整响应（用于调试）
    console.log('🔍 完整响应数据:');
    console.log(JSON.stringify(data, null, 2));

    return true;

  } catch (error) {
    console.error('❌ 测试失败:');
    console.error(`   错误类型: ${error.name}`);
    console.error(`   错误信息: ${error.message}`);
    if (error.stack) {
      console.error(`   堆栈跟踪:\n${error.stack}`);
    }
    return false;
  }
}

// 运行测试
testModelScopeAPI()
  .then(success => {
    console.log('');
    if (success) {
      console.log('✅ 测试通过！ModelScope API 工作正常。');
      process.exit(0);
    } else {
      console.log('❌ 测试失败！请检查错误信息。');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('💥 未捕获的错误:', error);
    process.exit(1);
  });
