function first()
{ if (document.getElementById('that').checked)
{ var ShippinName = document.getElementById('name').value;
 var zip = document.getElementById('zip').value;
  document.getElementById('nameb').value = name;
   document.getElementById('zipb').value = zip; 
}
    else{ document.getElementById('nameb').value = ""; document.getElementById('zipb').value = ""; 
} 
}