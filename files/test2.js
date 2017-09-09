let startTime = Date.now();
console.log("I am test2.js,I run at time:"+startTime);

function sleep(milliseconds) {
    for (var i = 0; i < 100000000000; i++) {
        if ((Date.now() - startTime) > milliseconds){
            break;
        }
    }
}
sleep(2000);
let endTime = Date.now();
console.log("I am test2.js,I run at time:"+startTime+" and use time:"+(endTime-startTime));
