# ClashRule

clash Verge:
dns.js  DNS配置
GeneralClashConfig.yaml  防止DNS泄露
Individual.yaml  订阅配置

yaml:备份

```
parsers: # array
- url: <https://suo>.*******
    yaml:
      prepend-rules:
        - DOMAIN-SUFFIX,checkip.synology.com,DIRECT
        - DOMAIN-SUFFIX,snapman,DIRECT
        - DOMAIN-SUFFIX,mihoyo,DIRECT
        - DOMAIN-SUFFIX,51tkb,DIRECT
        - DOMAIN-KEYWORD,134,DIRECT
        - DOMAIN-KEYWORD,xiabb,DIRECT
        - DOMAIN-KEYWORD,feixue666,DIRECT
        - DOMAIN-SUFFIX,hcfy,DIRECT
        - DOMAIN,portal.hnx.ctc.com,DIRECT
        - DOMAIN-SUFFIX,am-cloud,DIRECT
        - DOMAIN-KEYWORD,jtitsmtz-hq,DIRECT
        - DOMAIN-KEYWORD,hrrcy-cloud,DIRECT
        - DOMAIN,oa.hnx.ctc.com,DIRECT
        - DOMAIN-SUFFIX,shop.githubstu,DIRECT
        - DOMAIN-SUFFIX,tyrz-hq.hnx,DIRECT
        - DOMAIN-SUFFIX,mssportal,DIRECT
        - DOMAIN,idea.955code.com,DIRECT
        - DOMAIN,mirrors.sjtug.sjtu.edu.cn,DIRECT
        - DOMAIN-KEYWORD,192,DIRECT
        - DOMAIN-KEYWORD,ppzhilian,DIRECT
        - DOMAIN-SUFFIX,login.laiye,DIRECT
        - DOMAIN-KEYWORD,captcha.g,DIRECT
        - DOMAIN-KEYWORD,xiabb.chat,DIRECT
        - DOMAIN-SUFFIX,www.c-tv,DIRECT
        - IP-CIDR,192.0.0.0/8,DIRECT
        - IP-CIDR,134.0.0.0/8,DIRECT
```
