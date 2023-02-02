// $(document).ready(function(){

//   $('#state').append($("<option>").text("-State-"))
//   $('#city').append($("<option>").text("-City-"))
   
//   $.getJSON('/supplier/fetchallstates',function(data){
//       // alert(data[0].statename)
//       $.each(data,function(index,item){
//         //alert(item.statename)
//         $('#state').append($("<option>").text(item.statename).val(item.stateid))

//       })
//     })


//     $('#state').change(function(){
//       $('#city').empty()
//       $('#city').append($("<option>").text("-City-"))
//       $.getJSON('/supplier/fetchallcities',{stateid:$('#state').val()},function(data){
//         console.log(data)
//         $.each(data,function(index,item){
//           //alert(item.statename)
//           $('#city').append($("<option>").text(item.cityname).val(item.cityid))
  
//         })
//       })
//     })


// })