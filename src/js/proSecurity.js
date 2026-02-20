(function () {

  // 🔒 Chave ofuscada
  const _k = btoa("brandin_pro_key_2025");

  // 🔒 Token secreto embaralhado
  const _secret = "BR4ND1N-PRO-2025-X9";

  // 🔒 Função privada de validação
  function _validate(token) {
    return btoa(token) === btoa(_secret);
  }

  // 🔒 Ativação segura
  window.activateProSecure = function (token) {

    if (_validate(token)) {
      localStorage.setItem(_k, btoa("activated"));
      location.reload();
    } else {
      alert("Token inválido.");
    }
  };

  // 🔒 Verificação interna
  window.isUserProSecure = function () {
    return localStorage.getItem(_k) === btoa("activated");
  };

})();
