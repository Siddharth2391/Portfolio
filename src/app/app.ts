import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Contact } from './contact/contact';
import { About } from './about/about';
import {  Certifications } from './certifications/certifications';
import { Experience } from './experience/experience';
import { Internship } from './internship/internship';
import { Projects } from './projects/projects';

@Component({
  imports: [RouterOutlet, Navbar, Footer, Contact, About, Certifications, Experience, Internship, Projects],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('my-portfolio');
}
