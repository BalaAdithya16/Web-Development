interface Owner{
    String name="Adithya";
    int age=20;
    int number=837984792;
}
interface Newowner{
    String name="Adithyaakki";
    int age=21;
    int number=83;
}
// // class Shop{
// //     String branch;
// //     int cupsold;
// //     int price;
// //     public void display(){
// //     System.out.println(branch);
// //     System.out.println(cupsold);
// //     System.out.println(price);
// // }
//     // public Shop(String branch,int cupsold,int price){
//     //     this.branch=branch;
//     //     this.cupsold=cupsold;
//     //     this. price=price;
//     //     display();
//     // }

// }
// class Xerox{
//     String branchName;
//     int papersSold;
//     int pricePerPaper;
//     public void display(){
//         System.out.println(branchName);
//         System.out.println(papersSold);
//         System.out.println(pricePerPaper);
//     }
//     public Xerox(String branchName,int papersSold,int pricePerPaper){
//         this.branchName=branchName;
//         this.papersSold=papersSold;
//         this.pricePerPaper=pricePerPaper;
//         display();
//     }
// }
class Room implements Newowner,Owner{
    int roomNo;
    int noOfChairs;
//     void display(){
//         System.out.println(roomNo);
//         System.out.println(noOfChairs);
//     }
//     public Room(int roomNo,int noOfChairs){
//         this.roomNo=roomNo;
//         this.noOfChairs=noOfChairs;
//         display();
//     }
 }
class Main {
    public static void main(String[] args) {
        // Shop b1=new Shop();
        // System.out.println(b1.age);
        //  Xerox x1=new Xerox("1st branch",10,2);
        Room r1=new Room();
        System.out.println("owner age:"+r1.age);
        
    }
}