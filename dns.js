// Define the `main` function

function main(content) {
    const isObject = (value) => {
        return value !== null && typeof value === 'object'
    }

    const mergeConfig = (existingConfig, newConfig) => {
        if (!isObject(existingConfig)) {
            existingConfig = {}
        }
        if (!isObject(newConfig)) {
            return existingConfig
        }
        return { ...existingConfig, ...newConfig }
    }

    const cnDnsList = [
        'tls://223.5.5.5',
        'tls://1.12.12.12',
    ]
    const trustDnsList = [
        'https://doh.apad.pro/dns-query',
        'https://dns.cooluc.com/dns-query',
        'https://1.0.0.1/dns-query',
    ]
    const notionDns = 'tls://dns.jerryw.cn'
    const notionUrls = [
        'http-inputs-notion.splunkcloud.com',
        '+.notion-static.com',
        '+.notion.com',
        '+.notion.new',
        '+.notion.site',
        '+.notion.so',
    ]
    const combinedUrls = notionUrls.join(',');
    const dnsOptions = {
        'enable': true,
        'default-nameserver': cnDnsList, // 用于解析DNS服务器 的域名, 必须为IP, 可为加密DNS
        'nameserver-policy': {
            [combinedUrls]: notionDns,
            'geosite:geolocation-!cn': trustDnsList,
        },
        'nameserver': trustDnsList, // 默认的域名解析服务器, 如不配置fallback/proxy-server-nameserver, 则所有域名都由nameserver解析
    }

    const tunOptions = {
        stack: 'mixed',
    }

    // GitHub加速前缀
    const githubPrefix = 'https://ghproxy.lainbo.com/'

    // GEO数据GitHub资源原始下载地址
    const rawGeoxURLs = {
        geoip: 'https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat',
        geosite: 'https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat',
        mmdb: 'https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb',
    }

    // 生成带有加速前缀的GEO数据资源对象
    const accelURLs = Object.fromEntries(
        Object.entries(rawGeoxURLs).map(([key, githubUrl]) => [key, `${githubPrefix}${githubUrl}`]),
    )

    const otherOptions = {
        'unified-delay': true,
        'tcp-concurrent': true,
        'profile': {
            'store-selected': true,
            'store-fake-ip': true,
        },
        'sniffer': {
            enable: true,
            sniff: {
                TLS: {
                    ports: [443, 8443],
                },
                HTTP: {
                    'ports': [80, '8080-8880'],
                    'override-destination': true,
                },
            },
        },
        'geodata-mode': true,
        'geox-url': accelURLs,
    }
    content.dns = mergeConfig(content.dns, dnsOptions)
    content.tun = mergeConfig(content.tun, tunOptions)
    return { ...content, ...otherOptions }
}