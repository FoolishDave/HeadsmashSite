import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {
  lines = 3916;
  commits = 153;
  weapons = 3;
  actives = 1;
  passives = 0;
  enemies = 1;
}
