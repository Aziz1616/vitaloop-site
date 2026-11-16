import React, { useEffect } from 'react';

const privacyUrl = './gizlilik-politikasi.html';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.location.replace(privacyUrl);
  }, []);

  return (
    <div className="page-container privacy-policy">
      <h1>VitaLoop Gizlilik Politikası</h1>
      <a href={privacyUrl}>Gizlilik Politikasını Aç / Open Privacy Policy</a>
    </div>
  );
}
