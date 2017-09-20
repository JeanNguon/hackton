import { PellMell } from './../model/pellmell.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pellmell',
    templateUrl: 'pellmell.component.html',
    styleUrls: ['pellmell.component.css']
})
export class PellmellComponent implements OnInit {
    list: any;
    pellMell = [
        
        { nom: "Amiens	", nombre: "	954	", categorie: "Tourisme" },
        { nom: "Nantes	", nombre: "	753	", categorie: "Exposition" },
        { nom: "Vingt mille lieues sous les mers	", nombre: "	747	", categorie: "Arts de la scène" },
        { nom: "Nautilus	", nombre: "	683	", categorie: "Arts de la scène" },
        { nom: "Phileas Fogg	", nombre: "	644	", categorie: "Politique" },
        { nom: "Voyage au centre de la Terre	", nombre: "	541	", categorie: "Audiovisuel" },
        { nom: "Passepartout	", nombre: "	379	", categorie: "Arts de la scène" },
        { nom: "Capitaine Nemo	", nombre: "	324	", categorie: "Arts de la scène" },
        { nom: "Théâtre	", nombre: "	295	", categorie: "Audiovisuel" },
        { nom: "Maison Jules Verne	", nombre: "	291	", categorie: "Tourisme" },
        { nom: "Le tour du monde en 80 jours	", nombre: "	1566	", categorie: "Arts de la scène" },
        { nom: "Sébastien Azzopardi	", nombre: "	282	", categorie: "Arts de la scène" },
        { nom: "SteamPunk	", nombre: "	277	", categorie: "Littérature" },
        { nom: "Science-fiction  ", nombre: "276", categorie: "Littérature" },
        { nom: " Paris   ", nombre: "272", categorie: "Audiovisuel" },
        { nom: " Dani Lary  ", nombre: "256", categorie: "Arts de la scène" },
        { nom: "  De la Terre à la Lune  ", nombre: "252", categorie: "Sciences et Techniques" },
        { nom: "  Magie  ", nombre: "225", categorie: "Divers" },
        { nom: "  Musée Jules Verne ", nombre: "220", categorie: "Divers" },
        { nom: "  Sous-marin ", nombre: "211", categorie: "Divers" },
        { nom: "  Mer    ", nombre: "    203 ", categorie: "Jeunesse" },
        { nom: "  Vingt mille lieues sous les mers   ", nombre: "    200 ", categorie: "Jeunesse" },
        { nom: " Les naufragés du Fol Espoir ", nombre: "    195 ", categorie: "Arts de la scène" },
        { nom: "  Hetzel ", nombre: "    190 ", categorie: "Divers" },
        { nom: " Futuroscope ", nombre: "    188 ", categorie: "Tourisme" },
        { nom: " Science-fiction ", nombre: "    184 ", categorie: "Exposition" },
        { nom: "  Extraordinaire voyage  ", nombre: "    183 ", categorie: "Tourisme" },
        { nom: "  Sydney Bernard ", nombre: "    177 ", categorie: "Arts de la scène" },
        { nom: " vente   ", nombre: "    177 ", categorie: "Divers" },
        { nom: " Michel Strogoff ", nombre: "    174 ", categorie: "Littérature" },
        { nom: "  bateau ", nombre: "    164 ", categorie: "Sciences et Techniques" },
        { nom: "  Sacha Danino   ", nombre: "    163 ", categorie: "Audiovisuel" },
        { nom: "  Révolution industrielle    ", nombre: "    161 ", categorie: "Littérature" },
        { nom: "  Parc d'attractions ", nombre: "    160 ", categorie: "Tourisme" },
        { nom: "  Cinéma ", nombre: "    145 ", categorie: "Audiovisuel" },
        { nom: "  Comédie musicale   ", nombre: "    145 ", categorie: "Arts de la scène" },
        { nom: "  L'île mystérieuse  ", nombre: "    138 ", categorie: "Littérature" },
        { nom: "  Musique    ", nombre: "    138 ", categorie: "Arts de la scène" },
        { nom: "  anticipation   ", nombre: "    137 ", categorie: "Littérature" },
        { nom: " Centre de loisirs   ", nombre: "    137 ", categorie: "Animation jeunesse" },
        { nom: "  Eléphant   ", nombre: "    136 ", categorie: "Tourisme" },
        { nom: "  imaginaire ", nombre: "    135 ", categorie: "Littérature" },
        { nom: " lecture ", nombre: "    135 ", categorie: "Littérature" },
    ];
    ngOnInit(): void {
        this.list = this.pellMell;

    }

    getCategorie(pellMell: PellMell) {
        switch (pellMell.categorie) {

            case 'Animation': return 'firstCategorie';
            case 'Animation jeunesse': return 'firstCategorie';
            case 'Art de la scène': return 'firstCategorie';
            case 'Arts de la scène': return 'firstCategorie';
            case 'Audiovisuel': return 'fourthCategorie';
            case 'Autobiographie': return 'secondCategorie';
            case 'Biographie': return 'secondCategorie';
            case 'Conférence': return 'fourthCategorie';
            case 'Divers': return 'fourthCategorie';
            case 'Exposition': return 'fourthCategorie';
            case 'Exposition (ou tourisme?)': return 'fourthCategorie';
            case 'Jeunesse': return 'fourthCategorie';
            case 'Littérature': return 'secondCategorie';
            case 'Œuvres': return 'secondCategorie';
            case 'Olivier Monssens': return 'secondCategorie';
            case 'Politique': return 'thirdCategorie';
            case 'Sciences et techniques': return 'thirdCategorie';
            case 'Tourisme': return 'fourthCategorie';
        }
        return 'badge';
    }

    getSize(pellMell: PellMell){
        let number = +pellMell.nombre;
        return number/250;
    }

}
