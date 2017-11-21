# problemB

**Description**

As chief programmer at a cookie production plant you have many responsibilities, one of them being that the cookies produced and packaged at the plant adhere to the very demanding quality standards of the Nordic Cookie Packaging Consortium (NCPC).

At any given time, your production line is producing new cookies which are stored in a holding area, awaiting packaging. From time to time there are also requests from the packaging unit to send a cookie from the holding area to be packaged. Naturally, you have programmed the system so that there are never any packaging requests sent if the holding area is empty. What complicates the matter is the fact that representatives of the NCPC might make a surprise inspection to check that your cookies are up to standard. Such an inspection consists of the NCPC representatives demanding that the next few cookies sent to the packaging unit instead be handed over to them; if they are convinced that these cookies look (and taste) the same, you pass the inspection, otherwise you fail.

Fortunately, the production plant has invested in a new measurement thingamajig capable of measuring cookie diameters with a precision of 1 nanometre (nm). Since you do not have the time to always be on the lookout for cookie craving NCPC inspectors, you have decided that a sensible strategy to cope with the inspections is to always send a cookie having the median diameter among all cookies currently in the holding area to the packaging unit on a request. If there is no cookie exhibiting the median diameter in the holding area, you instead send the smallest cookie larger than the median to the packaging unit, hoping it will please the NCPC inspectors. This means that, if the cookies were sorted in order of ascending diameter, and if there were an odd number cc of cookies in the holding area, you would send the cookie at position (c+1)/2(c+1)/2 in the sorted sequence, while if there were an even number cc of cookies in the holding area, you would send the cookie at position (c/2)+1(c/2)+1 in the sorted sequence to the packaging unit on a request.

**Input**

Each line of the input contains either a positive integer dd, indicating that a freshly baked cookie with diameter dd nm has arrived at the holding area, or the symbol ’#’, indicating a request from the packaging unit to send a cookie for packaging. There are at most 600.000 lines of input, and you may assume that the holding area is empty when the first cookie in the input arrives to the holding area. Furthermore, you have read somewhere that the cookie oven at the plant cannot produce cookies that have a diameter larger than 30 centimetres (cm) (or 300.000.000 nm).

**Output**

A sequence of lines, each indicating the diameter in nm of a cookie sent for packaging, in the same order as they are sent.

**Examples**

Sample Input 1
```
1
2
3
4
#
#
#
#
```
Sample Output 1
```
3
2
4
1
```
Sample Input 2
```
1
#
2
#
3
#
4
#
```
Sample Output 2
```
1
2
3
4
```