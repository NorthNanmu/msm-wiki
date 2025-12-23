# Basic Configuration

This page focuses on main router and DNS split-routing basics, suitable for RouterOS (ROS) and similar soft-router setups.

## Variables

- `{DebianHostIP}`: IP address of the Debian host running MosDNS / Mihomo / sing-box

## Main Router DNS / DHCP DNS Settings

| Setting | Value |
| --- | --- |
| DNS Server | `{DebianHostIP}` |
| DHCP DNS | `{DebianHostIP}` |

> Note: If your router has a backup DNS, keep it in your failover strategy.

## Main Router Routes (main table)

### MosDNS and Mihomo FakeIP Routes

| Destination | Gateway |
| --- | --- |
| `28.0.0.0/8` | `{DebianHostIP}` |
| `8.8.8.8/32` | `{DebianHostIP}` |
| `1.1.1.1/32` | `{DebianHostIP}` |

### Telegram Routes

| Destination | Gateway |
| --- | --- |
| `149.154.160.0/22` | `{DebianHostIP}` |
| `149.154.164.0/22` | `{DebianHostIP}` |
| `149.154.172.0/22` | `{DebianHostIP}` |
| `91.108.4.0/22` | `{DebianHostIP}` |
| `91.108.20.0/22` | `{DebianHostIP}` |
| `91.108.56.0/22` | `{DebianHostIP}` |
| `91.108.8.0/22` | `{DebianHostIP}` |
| `95.161.64.0/22` | `{DebianHostIP}` |
| `91.108.12.0/22` | `{DebianHostIP}` |
| `91.108.16.0/22` | `{DebianHostIP}` |
| `67.198.55.0/24` | `{DebianHostIP}` |
| `109.239.140.0/24` | `{DebianHostIP}` |

### Netflix Routes

| Destination | Gateway |
| --- | --- |
| `207.45.72.0/22` | `{DebianHostIP}` |
| `208.75.76.0/22` | `{DebianHostIP}` |
| `210.0.153.0/24` | `{DebianHostIP}` |
| `185.76.151.0/24` | `{DebianHostIP}` |

## RouterOS Notes (Optional)

1. Add the routes above in `IP > Routes`, with routing table set to `main`.
2. In `IP > DNS`, set router DNS to `{DebianHostIP}`.
3. In `IP > DHCP Server > Networks`, set DHCP DNS to `{DebianHostIP}`.
4. If you need failover, use `Tools > Netwatch` to monitor a target (e.g. `1.1.1.1`), switch to backup DNS when down, and restore on recovery.
