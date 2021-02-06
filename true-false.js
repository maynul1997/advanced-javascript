// When the result show falsey
// 1.value will be 0 then show False Condition. ex- namee =0;
// 2.empty string = false condiiton. ex- namee ="";
// 3.undefined = false condition. ex- namee()
// 4. null = false condition.ex- namee = null;
// 5.NaN = false condition. ex- namee = NaN;

//truthy-
// 1. '0';
// 2. ' ';
// 3. [];

 //const namee = 0;

 let namee = 12;

if (namee || namee == 0){

    console.log("condition is true");

}
else{

    console.log("condition is false");
}