import { Component } from '@angular/core';
import { Utilisateur } from '../../../../models/utilisateur.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrl: './all.component.css'
})
export class AllComponent {
  utilisateurs: Utilisateur[] = []


  constructor(private ar: ActivatedRoute) { }

  ngOnInit(): void {

    this.ar.data.subscribe(data => {
      console.log(data);
      this.utilisateurs = data['toto']
    })
  }
}