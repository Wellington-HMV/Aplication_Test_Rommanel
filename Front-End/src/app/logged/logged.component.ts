import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterViewModel } from 'src/core/models/registry/view-model/register-view-model';
import { RegisterService } from 'src/core/services/register/register.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.sass']
})
export class LoggedComponent implements OnInit {

  $registers: Observable<RegisterViewModel>

  constructor(
    private _regiterService: RegisterService
  ) { }

  ngOnInit(): void {
    this.$registers = this._regiterService.geAll()
  }

  delete(id: number){
    this._regiterService.deleteRegister(id).subscribe(()=>location.reload(),err => alert("Não possível deletar o registro!"));
  }

}
