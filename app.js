class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._rating = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get rating() {
    return this._rating;
  }

  set isCheckedOut(status) {
    this._isCheckedOut = status;
  }

 toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  getAverageRating() {
    const initial = 0;
    const sum = this._rating.reduce((accumulator, currentValue) =>
      accumulator + currentValue, initial);
    const AverageRating = sum / this._rating.length;
    return AverageRating;
  }


  addRating(rating) {
     this._rating.push(rating);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, artist) {
    super(title);
    this._artist = artist;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songs() {
    return this._songs
  }

  songsList(title) {
    this._songs.push(title)
  }

  shuffle() {
    this._songs.sort();
  }
}

const cd = new CD('Arrival', 'ABBA');
cd.songsList('Dancing Queen');
cd.songsList('My Love, My Life');
cd.songsList('Money, Money, Money');
cd.songsList('Why Did It Have to Be Me');
cd.songsList('Knowing Me, Knowing You');

cd.shuffle();

console.log(cd.songs);
