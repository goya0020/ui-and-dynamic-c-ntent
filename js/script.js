
// Save the reference to text-field into a variable. | <input type="text">
const listInput=document.getElementById('input');
// Save the reference to new-item button into a variable. | <button>ADD ITEM</button> 
const listButton=document.getElementById('button');
// Save the reference to unordered or ordered list into a variable. | <ul></ul> or <ol></ol>
const listitem=document.getElementById('list');
// Save the reference to paragraph for feedback | <p class="feedback"></p>
const feedback=document.getElementById('feedback');

// Start function addItem.
function addItems() {
    // Create list-item and store output in a variable.
    const list=document.createElement('li');
    // Check if user entered the value in input text-field.
    if (listInput.value.trim() !== '') {
    // If so:
       // Use textContent property on created list-item
       // and assign it with the value of the text written in the text-field
       list.textContent=listInput.value;
       // Append list item to unordered list.
       listitem.appendChild(list);
       // Clear a feedback-message.
       feedback.textContent='';
       // Clear the text-field.
       listInput.value='';
       // Put the cursor back to text-field  
       listInput.focus();
    // End if. 
    }
    // Otherwise:
    else {
       // Print the message nothing entered in the paragraph "feedback"
       feedback.textContent='Nothing entered!';
    // End otherwise.
    }
// End function addItem.
}
// Register your function addItem for click event on button.
listButton.addEventListener('click', addItems);
