const $textInput = $(txtSkill);
const $textBtn = $(btnSkill);

$textBtn.click(function(evt){
  let skillString = $textInput.val();
  console.log(skillString);
  let skillTemplate = `<li class = skill>
    ${skillString}
        <button class='removeSkill'>x</button>
    </li>`;
  $('.skill-container').append(skillTemplate);
  $textInput.val('');
});
$('.skill-container').on('click', '.removeSkill', function(){
  
  $(this).parent().remove();
})
