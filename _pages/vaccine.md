---
title: Vaccine Locator
description: Find a Covid 19 Vaccination Slots in Bengaluru and other districts in India
permalink: /vaccine-locator
author_profile: false
classes: wide
---

Please click the button below to locate a Vaccination Slot. We will keep polling for the available vaccination slots until found or the page is closed. It'll raise an alarm when it finds a slot.

<label for="district">District Code: 
<input type="text" id="district" value="294"></label>

<label for="age">Vaccine For Age: 
<input type="text" id="age" value="18" title="Age 18 or 45"></label>

<button type="button" class="btn btn--info" onclick="locateVaccine()">Locate Vaccine</button>
<button type="button" class="btn btn--info" onclick="stopLooking()">Stop</button>

*[**Districts Codes**](https://www.geekay.xyz/covid-vaccine-locator/)

<h3 id="h3"></h3>

<table class="table table-bordered"></table>
