document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".copy");
  if (!btn) return;

  function fallback(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok ? Promise.resolve() : Promise.reject();
  }

  function flash(msg) {
    btn.textContent = msg;
    setTimeout(function () { btn.textContent = "Copy email"; }, 1800);
  }

  btn.addEventListener("click", function () {
    var text = btn.dataset.copy;
    var done = navigator.clipboard && window.isSecureContext
      ? navigator.clipboard.writeText(text)
      : fallback(text);
    done.then(
      function () { flash("Copied!"); },
      function () { flash("Copy failed"); }
    );
  });
});
