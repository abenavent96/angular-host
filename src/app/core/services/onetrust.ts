import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare const Optanon: any;

@Injectable({
  providedIn: 'root'
})
export class OneTrust {

  private id: string | null = null;
  private scriptsLoaded = 0;
  private resolve: any;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) {}

  init() {
    return new Promise((resolve) => {
      this.resolve = resolve;
      const params = new URLSearchParams(this.document.location.search);
      if (params.get('skipOneTrustScript') === 'true') { return this.resolve(); }
      this.id = '89c464e8-e28b-4539-bc24-93be6407118d';
      this.addScriptTagConsent();
      this.addScriptTagScriptTemplates();
      this.addScriptFunction();
    });
  }

  private addScriptTagConsent() {
    if (this.document.getElementById('script_onetrust_consent')) { return; }
    const script: any = this.document.createElement('script');
    script.id = 'script_onetrust_consent';
    script.src = `https://cdn.cookielaw.org/consent/${this.id}/OtAutoBlock.js`;
    this.bindAndAppendScript(script);
  }


  private addScriptTagScriptTemplates() {
    if (this.document.getElementById('script_onetrust_scripttemplates')) { return; }
    const script: any = this.document.createElement('script');
    script.id = 'script_onetrust_scripttemplates';
    script.src = `https://cdn.cookielaw.org/scripttemplates/otSDKStub.js`;
    script.charset = 'UTF-8';
    script.setAttribute('data-document-language', 'true');
    script.setAttribute('data-domain-script', this.id);
    this.bindAndAppendScript(script);
  }

  private addScriptFunction() {
    if (this.document.getElementById('script_onetrust_scriptfunction')) { return; }
    const script: any = this.document.createElement('script');
    script.id = 'script_onetrust_scriptfunction';
    script.text = 'function OptanonWrapper() { }';
    script.type = 'text/javascript';
    this.appendScript(script);
    this.onScriptLoaded();
  }

  private bindAndAppendScript(script: any) {
    script.type = 'text/javascript';
    if (script.readyState) { // IE
      script.onreadystatechange = () => {
        script.onreadystatechange = null;
        if (script.readyState === 'loaded' || script.readyState === 'complete') {
          this.onScriptLoaded();
        }
      };
    } else { // Others
      script.onload = (e: any) => { this.onScriptLoaded(); };
      script.onerror = () => { };
    }
    this.appendScript(script);
  }

  private appendScript(script: any) {
    const body = this.document.getElementsByTagName('head')[0];
    body.appendChild(script);
  }

  private onScriptLoaded() {
    this.scriptsLoaded++;
    if (this.scriptsLoaded === 3) { this.resolve(); }
  }

}
