
class Catalog {
// class to show catalog  
    constructor() {
      this._media = [];
    }
  
    get media() {
       return this._media;
      }

      //getter for media

      
  
    addMedia(media) {
       this._media.push(media);
      }
      //pushes media when a new instance is made
  }
  
  
  const catalog = new Catalog();
  
  
  
  
  
  
  class Media {
    // main class for media items
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
      catalog.addMedia(this)
    }
  
    get title() {
      return this._title;
    }
  
    get isCheckedOut() {
      return this._isCheckedOut;
    }
  
    get title() {
      return this._ratings;
    }
  
    set isCheckedOut(booleen) {
      this._isCheckedOut = status;
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut
    }
  
    getAverageRating() { 
     return (Math.round(this._ratings.reduce((a, b) => a + b, 0) / (this._ratings.length)))
     // reduces rating array to a total then divides by the number in the array
    }
  
    addRating(rating) {
  
      if (rating >= 1 && rating <= 5) {
        this._ratings.push(rating);
      } else {
        console.log('Ratings must be between 1 and 5')
      }
    }
  
  
  
    
  }
  
  
  class Book extends Media {
    constructor(author, title, pages) {
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
    constructor(director, title, runTime) {
      super(title);
      this._runTime = runTime;
      this._director = director;
      this._movieCast = [];
    }
  
    get director() {
      return this._director;
    }
  
    get runTime() {
      return this._runTime;
    }
  
    get movieCast() {
      return this._movieCast;
    }
  
    addCastMember(member) {
      this._movieCast.push(member);
    }
  
  
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  speed.addCastMember('Tom Cruise');
  
  console.log(speed.getAverageRating());
  console.log(speed._movieCast);
  
  class CD extends Media {
    constructor(title, artist) {
      super(title);
      this._artist = artist;
      this._tracks = [];
  
    };
  
    get artist() {
      return this._artist;
    };
  
    get tracks() {
      return this._tracks;
    };
  
    addTrack(track) {
      this._tracks.push(track);
    };
  
    shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  
  
  }
  
  
  
    }
  
  const peace = new CD('Peace Vol. 2', 'Bethel Music');
  
  peace.addTrack('Living Hope');
  peace.addTrack('Battle Belongs');
  peace.addTrack('Graves into Gardens');
  peace.addTrack('It is Well');
  peace.addTrack('Way Maker');
  
  console.log(peace)
  
  console.log(peace.tracks);
  
  peace.shuffle(peace.tracks);
  
  console.log(peace.tracks);
  
  
  console.log(catalog);
  
  
  
  
  
