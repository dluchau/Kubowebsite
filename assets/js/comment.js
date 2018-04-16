var textArea = document.getElementById('comment-textarea');

var postButton = document.getElementById('postButton');

postButton.onclick = function(){
  var commentList = document.createElement('UL');
  var commentListItem = document.createElement('LI');
  var paragraph = document.createElement('P');
  var header = document.createElement('H3');
  var headerText = document.createTextNode('Comment' );
  var textAreaInput = document.createTextNode(textArea.value);
  paragraph.appendChild(textAreaInput);
  header.appendChild(headerText);
  commentListItem.appendChild(header);
  commentListItem.appendChild(paragraph);
  commentList.appendChild(commentListItem);
  document.getElementById('comment').appendChild(commentList);
}
