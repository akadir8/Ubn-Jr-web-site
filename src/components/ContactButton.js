import React from 'react';
/* Bu kod, React kütüphanesini içe aktarıyor ve Button adında bir fonksiyonel bileşen tanımlıyor. Fonksiyon parametreleri arasında showForm adında bir fonksiyon alıyor. */
 
function Button({ showForm }) {
  
  return (
    /* Button fonksiyonu, bir düğme öğesi oluşturuyor ve showForm fonksiyonunu düğmenin onClick olayına bağlıyor. Düğmenin className özelliği, stil sayfasında tanımlı birkaç sınıfı içeriyor. */
    <button id="buton"
    /* onClick olayı, düğme öğesine tıklandığında çağrılacak olan bir fonksiyonu belirtir. */
      onClick={showForm}
      className="ml-56 rounded-full py-2 px-3 text-xs font-bold tracking-wider text-white hover:bg-cyan-700 duration-100"
    >
      Bizimle iletişime geçin
    </button>
  );
}
 
export default Button;
/* export default Button ifadesi, bileşenin dışa aktarılması ve başka bir yerde kullanılabilir hale getirilmesi için kullanılır. */