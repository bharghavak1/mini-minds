import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
// import {SuccessComponent} from "./view/success/success.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sortMyAudio') sortAudioPlayer: ElementRef ;
  @ViewChild('myDataAudio') myDataAudio: ElementRef ;
  @ViewChild('myFaceAudio') myFaceAudio: ElementRef ;
  @ViewChild('mySuccessAudio') mySuccessAudio: ElementRef ;

  welcome = true;
  title = 'mini-mind';
  sort = false;
  dataSet = false;
  face = false;
  sourceItem: any = {}
  draggDataItem: any;
  speaker  = '/../src/assets/images/Speaker_Icon.png';
  expected = 2;
  emojis: string[] = Array(30).fill('sad');
  currentTab = '';
  data =[
    {
      label: 1,
      currentIndex: 0,
      color: 'red',
      nextIndex: 0,
      order: 4,
      img: 'assets/images/grandmother.png'
    },
    {
      label: 2,
      currentIndex: 1,
      color: 'blue',
      nextIndex: 1,
      order: 3,
      img: 'assets/images/adult.png'
    },
    {
      label: 3,
      currentIndex: 2,
      color: 'yellow',
      nextIndex: 2,
      order: 1,
      img: 'assets/images/baby.png'
    },
    {
      label: 4,
      currentIndex: 3,
      color: 'gray',
      nextIndex: 3,
      order: 2,
      img: 'assets/images/child.png'
    }
  ]
  destiny= [
    {
      label: -1,
      color: "",
      source: -1,
      currentIndex:0,
      order: 99,
      img: ""

    },
    {
      label: -1,
      color: "",
      source: -1,
      currentIndex:1,
      order: 99,
      img: ""
    },
    {
      label: -1,
      color: "",
      source: -1,
      currentIndex:2,
      order:99,
      img: ""
    },
    {
      label: -1,
      color: "",
      source: -1,
      currentIndex:3,
      order: 99,
      img: ""
    },
  ];
  all = [{
    label: 'first',
    number: 1,
    color: '',
    img: 'assets/images/banana_bunch.png',
    moved: 1
  },
    {
      label: 'secondLeft',
      number: 2,
      color: '',
      img: 'assets/images/milkcarton.png',
      moved: 2
    },
    {

      label: 'secondRight',
      number: 3,
      color: '',
      img: 'assets/images/apple.png',
      moved: 3

    }
  ];
  moved = {
    label: 'moved',
    color: 'white',
    img: 'assets/images/glass_empty.png',
    source: 99
  }
  constructor(public dialog: MatDialog) {

  }

  reset(){
    this.data =[
      {
        label: 1,
        currentIndex: 0,
        color: 'red',
        nextIndex: 0,
        order: 4,
        img: 'assets/images/grandmother.png'
      },
      {
        label: 2,
        currentIndex: 1,
        color: 'blue',
        nextIndex: 1,
        order: 3,
        img: 'assets/images/adult.png'
      },
      {
        label: 3,
        currentIndex: 2,
        color: 'yellow',
        nextIndex: 2,
        order: 1,
        img: 'assets/images/baby.png'
      },
      {
        label: 4,
        currentIndex: 3,
        color: 'gray',
        nextIndex: 3,
        order: 2,
        img: 'assets/images/child.png'
      }
    ]
    this.destiny= [
      {
        label: -1,
        color: "",
        source: -1,
        currentIndex:0,
        order: 99,
        img: ""

      },
      {
        label: -1,
        color: "",
        source: -1,
        currentIndex:1,
        order: 99,
        img: ""
      },
      {
        label: -1,
        color: "",
        source: -1,
        currentIndex:2,
        order:99,
        img: ""
      },
      {
        label: -1,
        color: "",
        source: -1,
        currentIndex:3,
        order: 99,
        img: ""
      },
    ];
    this.all = [{
      label: 'first',
      number: 1,
      color: '',
      img: 'assets/images/banana_bunch.png',
      moved: 1
    },
      {
        label: 'secondLeft',
        number: 2,
        color: '',
        img: 'assets/images/milkcarton.png',
        moved: 2
      },
      {

        label: 'secondRight',
        number: 3,
        color: '',
        img: 'assets/images/apple.png',
        moved: 3

      }
    ];
    this.moved = {
      label: 'moved',
      color: 'white',
      img: 'assets/images/glass_empty.png',
      source: 99
    }
    this.emojis = Array(30).fill('sad');
    this.addHappyEmojiRandomly();
  }


  welcomeClick(){
    this.sort = true;
    this.reset();
    this.welcome = false;
    this.shuffleArray();
  }

  shuffleArray() {
    for (let i = this.data.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
    }
  }
  sourceClick(d: any){
    let l = true;
    this.destiny.forEach(el => {
      if(el.label == -1 && l){
        el.label = d.label;
        el.color = d.color;
        el.source = d.currentIndex;
        d.nextIndex = -1;
        el.order = d.order;
        el.img = d.img;
        l= false;
      }
    })
    this.checkorder();
  }
  destinyClick(d: any){
    this.data.forEach(el => {
      if (el.currentIndex === d.source){

        el.nextIndex = d.source;
        d.source = -1;
        d.label = -1;
        d.color = ""
        d.order = 99;
        d.img = '';
      }
    })
  }
  checkorder(){
    let array:any = []
    this.destiny.forEach((el, i)=> {

      array.push(el.order);
    })
    let a = array.filter((el: any) => el == 99);
    if (a.length == 0){
      if (this.isSorted(array)){
        // this.button.nativeElement.click();
        // this.sort = false;
        // this.dataSet = true;
        this.currentTab = 'sort';
        this.popOver();
        this.shuffleDataArray();
        // const diaRef =  this.openDialog();
        // diaRef.afterClosed().subscribe(result => {
        //   // this.route.navigate(['/dataset']);
        //
        //
        // });
        // this.route.navigate(['/dataset']);


      }
    }

  }
  shuffleDataArray() {
    for (let i = this.all.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.all[i], this.all[j]] = [this.all[j], this.all[i]];
    }
  }
  isSorted(arr: any)   {
    return this.isSortedArray(arr) || this.isSortedDescending(arr);
  }

  isSortedArray(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  isSortedDescending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  sortPlayAudio(){
    this.sortAudioPlayer.nativeElement.play();

  }
  openDialog() {
    // return  this.dialog.open(SuccessComponent, {
    //   width: '350px',
    //   height: '400px',

    // });

  }
  dragOver(ev: any){
    ev.preventDefault();
  }
  sortOnDrop(ev:any, d: any){

    console.log('drop end',d);


    if (this.sourceItem.s == 'source') {
      if (d.source  == -1){
        d.source = this.sourceItem.currentIndex;
        this.sourceItem.nextIndex = -1;
        d.order = this.sourceItem.order;
        d.img = this.sourceItem.img;
      }

    }else {

      [d.img, this.sourceItem.img] = [this.sourceItem.img, d.img];
      [d.order, this.sourceItem.order] = [this.sourceItem.order, d.order];
      [d.source, this.sourceItem.source] = [this.sourceItem.source, d.source];


    }

    this.checkorder();


  }
  checkSortOrder(ev: any){
    console.log('drag start', ev);
    ev.s = 'source'
    this.sourceItem = ev;
  }
  sortedOrder(d: any){
    d.s = 'dest';
    this.sourceItem = d;
  }
  wiseversa(s:any, d: any){
    let m;
    m = s;
    s = d;
    d = m;
    return {s, d};
  }

  playDataAudio(){
    this.myDataAudio.nativeElement.play();
  }
  dragDataOver(event: any){
    event.preventDefault();
  }
  checkDataOrder(ev: any){
    this.draggDataItem = ev.number;

  }
  onDrop(ev: any){
    if (this.draggDataItem == this.expected){
      this.moved.img = 'assets/images/glass_filled.png'
      // this.moved.img = 'assets/images/milkpour.png';
      // alert('success');
      setTimeout(() => {

        // this.addHappyEmojiRandomly();
        this.currentTab = 'data';
        this.popOver();

      }, 500);
      // this.route.navigate(['/face']);
    }
    else {
      document.querySelector('.milk')?.classList.add('shake');
      setTimeout(() => {
        document.querySelector('.milk')?.classList.remove('shake');
      }, 500);
    }
  }


//  face ts change's
  playFaceAudio(){
    this.myFaceAudio.nativeElement.play();
  }
  addHappyEmojiRandomly() {
    const randomIndex = Math.floor(Math.random() * 30);
    this.emojis[randomIndex] = 'happy';
  }
  findSmile(ev: string, img: any){
    if (ev === 'happy'){
      document.querySelector(img)?.classList.add('happyZoom');
      setTimeout(() => {
        document.querySelector(img)?.classList.remove('happyZoom');
        this.currentTab = 'face';
        this.popOver();
      }, 500);
      // const diaRef =  this.openDialog();
      // diaRef.afterClosed().subscribe(result => {
      //   // this.route.navigate(['/dataset']);
      //   this.face = false;
      //   this.welcome = true;  })

  }
    else {
      document.querySelector(img)?.classList.add('shake');
      setTimeout(() => {
        document.querySelector(img)?.classList.remove('shake');
      }, 500);
    }
}

  close(){
    const myModal = document.getElementById('myModal');
    if (myModal) {
      myModal.style.display = "none";
    }
    // const overlay = document.getElementById("overlay");
    // if (overlay){
    //   overlay.style.display = "none";
    // }
    if (this.currentTab === 'sort'){
      this.sort = false;
      this.dataSet = true;
    }
    else if (this.currentTab === 'data'){
      this.dataSet = false;
      this.face = true;
    }
    else if(this.currentTab === 'face'){
      this.face = false;
      this.welcome = true;
    }


  }
  popOver(){
    this.mySuccessAudio.nativeElement.play();
    const myModal = document.getElementById('myModal');
    if (myModal) {
      myModal.style.display = "flex";
    }
    // const overlay = document.getElementById("overlay");
    // if (overlay){
    //   overlay.style.display = "block";
    // }
    // document.getElementById('myModal').style.display = "block";
    // document.getElementById("overlay").style.display = "block";
  }


}
