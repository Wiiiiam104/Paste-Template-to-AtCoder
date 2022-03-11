// ==UserScript==
// @name         paste template
// @namespace    http://atcoder.jp/
// @version      0.3.0
// @description  paste your template to atcoder
// @author       wiiiiam104
// @match        https://atcoder.jp/contests/*/tasks/*
// @match        https://atcoder.jp/contests/*/custom_test*
// ==/UserScript==


(function script() {
  // yourCode(string) will be saved by running below (recommend using String.raw)
  // localStorage.ubuneci5$template=(yourCode);

  const f=(async ()=>{
    const data=localStorage.ubuneci5$template;
    if (data===undefined)return alert("no saved code found");
    if ($(".btn-toggle-editor").click().click(), !document.querySelector("span.cm-variable") || confirm("Your current code will be replaced. Are you sure?")) {
      $(".plain-textarea").val(data);
      $(".editor").data("editor").doc.setValue(data);
    }
  });

  const g=()=>{
    let input=document.getElementById("ubuneci5$textarea").value;
    if(input==="" || input===undefined)return;
    localStorage.ubuneci5$template=input;
    document.getElementById("ubuneci5$span").remove();
    $("<p>").html("your template was saved").appendTo(".col-sm-3.editor-buttons");
  }

  const h=()=>{
    let span=$("<span>", {id:"ubuneci5$span"});
    $("<p>").html("input your template").appendTo(span);
    $("<textarea>", {id:"ubuneci5$textarea"}).appendTo(span);
    $("<a>").click(g).html("OK").appendTo(span);
    span.appendTo(".col-sm-3.editor-buttons");
  }

  $("<a>", {
    class:"btn btn-danger btn-sm",
    style:"margin:10px 0;display:block;width:128.95px;"
  })
  .html("Paste Your Template")
  .click(f)
  .appendTo(".col-sm-3.editor-buttons");

  $("<a>", {
    class:"glyphicon glyphicon-cog"
  })
  .click(h)
  .appendTo(".col-sm-3.editor-buttons");

})();
