document.getElementById('add-property').addEventListener('click', function() {
    // Prompt the user to select an image file
    var input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function() {
      // Create a new property element
      var property = document.createElement('div');
      property.className = 'property';
  
      // Create an image element and set its source to the user-selected image
      var image = document.createElement('img');
      image.src = URL.createObjectURL(input.files[0]);
  
      // Add the image to the property element
      property.appendChild(image);
  
      // Add the property element to the property gallery
      document.getElementById('property-gallery').appendChild(property);
    };
    input.click();
  });