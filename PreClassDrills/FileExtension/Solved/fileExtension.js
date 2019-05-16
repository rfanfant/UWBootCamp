// You have an array of filenames with extensions. Sort the files into arrays based on whether or not they are videos or images.

var files = [
  "pavans_first_birthday.mov",
  "owens_asleep_at_the_computer.jpg",
  "michael_fights_a_polar_bear.mp4",
  "nate_road_rage.avi",
  "ruby_skydiving.jpeg",
  "ken_getting_his_black_belt.png",
  "dan_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

// output => videos array [.mov, .gif, .mp4, .mpeg]
// => image array [.png, .jpg, .jpeg]

// Introduction to Big O 
// https://www.interviewcake.com/article/javascript/big-o-notation-time-and-space-complexity?

// extensionSorter(n) TIME COMPLEXITY --> O(n)

function extensionSorter(fileArray){
  var videoArray = [];
  var imageArray = [];
  var videoExt = ['mov', 'mp4', 'avi', 'gif'];
  for (let i = 0; i < fileArray.length; i++) {
    const element = fileArray[i];
    // console.log(element);
    // how do we read the extension of each element in javascript?
    // input => pavans_first_birthday.mov
    // output => .mov
    
    var extension = element.split(".")[1];
    // console.log("EXTENSION: ", extension);
    // input => mov
    //  output => videoArray ["mov"]
    if(videoExt.indexOf(extension) !== -1){
      if(videoArray.indexOf(extension) === -1){
        videoArray.push(extension);
      }
    }else{
      imageArray.push(extension);
    }
  }
  console.log("VIDEO EXT: ", videoArray)
  console.log("IMG EXT: ", imageArray)

}


extensionSorter(files);