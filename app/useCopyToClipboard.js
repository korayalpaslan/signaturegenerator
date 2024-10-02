"use client";
import { useState } from "react";
export const useCopyToClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (content) => {
    const originalText = "Hello George";
    const boldText = `<table width="600" cellspacing="0" cellpadding="0" border="0" style="padding: 32px 0; font-size:13px;font-weight: 500; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";>
          <tbody>
              <tr>
                  <td width="120" style="vertical-align:top;padding:0 16px; ">
                      <a href="https://konghq.com/" data-external="true" style="margin-bottom=16px;">
                      <img width="100%" style="border:none" src="https://drive.google.com/uc?export=view&id=1e046mtArZT7TOTMoaAmhrCLGjfigmZMd">
                      </a>
                      <br/> 
                      <span style="margin-bottom:16px; color:#4C4C4C;">www.posbilisim.com</span>
                    <table cellpadding="0" border="0" style="vertical-align:top; padding-top:10px">
                          <tbody>
                              <tr>
                                <td style=";   font-size: 12px; font-weight: bold; " ><a href="https://konghq.com/jobs/" data-external="true" style="text-decoration:none;color: #FF8000;"><a href="https://twitter.com/thekonginc" data-external="true"><img width="50%" style="border:none" src="https://assets.prd.mktg.konghq.com/images/2023/12/657a0219-icn-x.png"></a></td><td style="padding-left: 7px   font-size: 12px; font-weight: bold; " ><a href="https://konghq.com/jobs/" data-external="true" style="text-decoration:none;color: #FF8000;"><a href="https://www.linkedin.com/company/konghq/" data-external="true"><img width="50%" style="border:none" src="https://konghq.com/wp-content/uploads/2019/03/icn-linkedin.png"></a></td>
                          <br/>
                          </tr>
                          </tbody>
                      </table>
                  </td>
                  <td style="border-left:solid #d4d4d4 1px" width="16"></td>
                  <td style="vertical-align: top; text-align:left;color:#000000; text-align:left"> <span style="display: block; padding-top: 10px; line-height:0px;color:#000000;font-size:15px; font-weight: bold;">Cihan Bulut</span>
                      <br/>
                      <span style="margin-bottom:16px;color:#4C4C4C;">Yönetim Kurulu Başkan Yardımcısı</span>
                      <br/>
                      <span style="margin-bottom:16px;color:#4C4C4C;">Vice Chairman of the Board</span>
                      <br/><br/>
                      <span style="margin-bottom:16px;color:#4C4C4C;">+90 542 519 34 05 | cihan@posbilisim.com.tr</span>
                      <br/><br/>
                       <span style="color:#8C8C8C!important;">Merkez: Atatürk Mh. Ekincioğlu Sk. No:2/3 Ataşehir İstanbul</span>
                       <br>
                       <span style="color:#8C8C8C!important;">Tel: +90 216 573 07 67 | Fax: +90 216 572 34 30</span>
                        <br/><br/>
                       <span style="color:#8C8C8C!important;">Şube: Aşağı Öveçler Mh. 1314 Sk. No:34/15 Çankaya Ankara</span>
                      <br>
                       <span style="color:#8C8C8C!important;">Tel: +90 312 483 07 67 | Fax: +90 312 479 07 67</span>
                  </td> </td>
              </tr>
          </tbody>
      </table>`;
    const blobHtml = new Blob([boldText], { type: "text/html" });
    const blobText = new Blob([originalText], { type: "text/plain" });
    const data = [
      new ClipboardItem({
        ["text/plain"]: blobText,
        ["text/html"]: blobHtml,
      }),
    ];
    try {
      await navigator.clipboard.write(data);
      setIsCopied(true);
      console.log("Copied to clipboard:", content);
    } catch (error) {
      setIsCopied(false);
      console.error("Unable to copy to clipboard:", error);
    }
  };

  return { isCopied, copyToClipboard };
};
