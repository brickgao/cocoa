$(function() {
  $(".post-content img").each(function(index, img) {
    var img_src = img.src,
        img_alt = img.alt || "";
    $(this).parent().append(
      `<div id="img-title">${img_alt}</div>`
    ).then($(this).wrap(
      `<a id="fancybox" href="${img_src}" data-fancybox data-caption="${img_alt}"></a>`
    ));
  });
});
