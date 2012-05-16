$(document).ready(function() {
    
    //setup editable fields
    $('.edit').editable('index.html');
    
    //setup colour picker
    $('#color-picker').colorPicker({colors: ["2e358b", "6f72af", "912b88", "d53880", "f499be", "b10e1e", "df3034", "f47738", "b58840", "ffbf47", "85994b", "006435", "28a197", "2b8cc4"]});
    $('#color-picker').change(function() {
      $('.flash img').attr("src", "images/" + $('#color-picker').val().replace('#', '') + '.png')
    });
    
});