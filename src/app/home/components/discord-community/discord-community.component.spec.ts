import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordCommunityComponent } from './discord-community.component';

describe('DiscordCommunityComponent', () => {
  let component: DiscordCommunityComponent;
  let fixture: ComponentFixture<DiscordCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscordCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscordCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
