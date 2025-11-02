//  ვაიმპორტებთ რეაქტს რეაქტის ბიბლიოთკიდან
import React from 'react'; 
// ვქმნით ფესვს შემქმნელ მეთოდს
import { createRoot } from 'react-dom/client';

// ვქმნით კონტეინერ ცვლადს სადაც ვინახავთ Id-app-ს
const container = document.getElementById('app');

// ვქმნით root  ცვლადს სადაც ვინახავთ შექმნილ კონტეინერის ფესვს
const root = createRoot(container);
// ვარენდერებთ(გამოგვაქ ელემენტები)შევქმენით მშობელი ელემენთი Div სადაც არის სხვადასხვა ელემენტები h1, button, p
root.render(
  <div>
  
    <h1>Hello world</h1>
    <button>Click ME</button>
    <p>Zdarova</p>
  
  </div>
);
