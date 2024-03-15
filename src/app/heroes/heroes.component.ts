import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  // While you could call getHeroes() in the constructor, that's not the best practice.
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  ngOnDestroy(): void {
    // TODO: make unsubscribe
    throw new Error('Method not implemented.');
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
