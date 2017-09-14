import { Component } from '@angular/core';
import { IonicPage, ModalController, Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard'
import { DataProvider } from '../../providers/data/data'
import { RedditProvider } from '../../providers/reddit/reddit'
import { FormControl } from '@angular/forms'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	subredditvalue: string
	subredditControl: FormControl

	constructor(public dataService: DataProvider, public redditService: RedditProvider, public modalCtrl: ModalController,
		public platform: Platform, public keyboard: Keyboard) {

		this.subredditControl = new FormControl()
	}

	ionViewDidLoad() {
		this.subredditControl.valueChanges.debounceTime(1500)
		.distinctUntilChanged().subscribe(subreddit => {
			if(subreddit != '' && subreddit) {
				this.redditService.subreddit = subreddit
				this.changeSubreddit()
				this.keyboard.close()
			}
		})

		this.platform.ready().then(() => {
			this.loadSettings()
		})
	}

	loadSettings(): void {

	}
	showComments(post): void {

	}
	openSettings(): void {

	}
	playVideo(e, post): void {

	}
	changeSubreddit(): void {

	}
	loadMore(): void {

	}
}
