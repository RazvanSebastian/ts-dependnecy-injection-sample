/**
 * https://www.servicetitan.am/2021/07/13/typescript-decorators-dependency-injection.html
 */

// Import stylesheets
import './style.css';
import 'reflect-metadata';
import { Injectable, Injector } from './injector';

@Injectable()
class Service1 {
  doService1Staff() {
    console.log('doService1Staff');
  }
}

@Injectable()
class Service2 {
  doService2Staff() {
    console.log('doService2Staff');
  }
  constructor(public service1: Service1) {}
}

@Injectable()
class Example {
  constructor(public service1: Service1, public service2: Service2) {}
}

const example = Injector.resolve(Example);
example.service1.doService1Staff();
example.service2.doService2Staff();
