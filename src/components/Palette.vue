<template>
  <div class="palette-grid">
        <div id="palette-1">
            <div class="pie" data-start="0" data-value="30"></div>
            <div class="pie highlight" data-start="30" data-value="30"></div>
            <div class="pie" data-start="60" data-value="40"></div>
            <div class="pie big" data-start="100" data-value="260"></div>   
        </div>
        <div id="palette-2">
            <div class="pie" data-start="0" data-value="30"></div>
            <div class="pie highlight" data-start="30" data-value="30"></div>
            <div class="pie" data-start="60" data-value="40"></div>
            <div class="pie big" data-start="100" data-value="260"></div>   
        </div>
		<div id="palette-3">
            <div class="pie" data-start="0" data-value="30"></div>
            <div class="pie highlight" data-start="30" data-value="30"></div>
            <div class="pie" data-start="60" data-value="40"></div>
            <div class="pie big" data-start="100" data-value="260"></div>   
        </div>
		<div id="palette-4">
            <div class="pie" data-start="0" data-value="30"></div>
            <div class="pie highlight" data-start="30" data-value="30"></div>
            <div class="pie" data-start="60" data-value="40"></div>
            <div class="pie big" data-start="100" data-value="260"></div>   
        </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>

.palette-grid {
    padding:5px;
    background-color: $palette2q4;
	display: flex;
	min-height: 80px;
	margin: auto;
	justify-content: center;
}
#palette-1, #palette-2, #palette-3, #palette-4 {
	position: relative;
	width: 20vw;
	padding: 10px;
}

/* 
  make each pie piece a rectangle twice as high as it is wide.
  move the transform origin to the middle of the left side.
  Also ensure that overflow is set to hidden.
*/
  .pie {
		position:absolute;
		width:25px;
		height:50px;
		overflow:hidden;
		left:37.5px;
		-moz-transform-origin:left center;
		-ms-transform-origin:left center;
		-o-transform-origin:left center;
		-webkit-transform-origin:left center;
		transform-origin:left center;
	}
/*
  unless the piece represents more than 50% of the whole chart.
  then make it a square, and ensure the transform origin is
  back in the center.

  NOTE: since this is only ever a single piece, you could
  move this to a piece specific rule and remove the extra class
*/
	.pie.big {
		width:50px;
		height:50px;
		left:12.25px;
		-moz-transform-origin:center center;
		-ms-transform-origin:center center;
		-o-transform-origin:center center;
		-webkit-transform-origin:center center;
		transform-origin:center center;
	}
/*
  this is the actual visible part of the pie. 
  Give it the same dimensions as the regular piece.
  Use border radius make it a half circle.
  move transform origin to the middle of the right side.
  Push it out to the left of the containing box.
*/
	.pie:BEFORE {
		content:"";
		position:absolute;
		width:25px;
		height:50px;
		left:-25px;
		border-radius:25px 0 0 25px;
		-moz-transform-origin:right center;
		-ms-transform-origin:right center;
		-o-transform-origin:right center;
		-webkit-transform-origin:right center;
		transform-origin:right center;
		
	}
 /* if it's part of a big piece, bring it back into the square */
	.pie.big:BEFORE {
		left:0px;
	}
/* 
  big pieces will also need a second semicircle, pointed in the
  opposite direction to hide the first part behind.
*/
	.pie.big:AFTER {
		content:"";
		position:absolute;
		width:25px;
		height:50px;
		left:25px;
		border-radius:0 25px 25px 0;
	}
/*
  add colour to each piece.
*/
	.pie:nth-of-type(1):BEFORE,
	.pie:nth-of-type(1):AFTER {
		background-color:blue;	
	}
	.pie:nth-of-type(2):AFTER,
	.pie:nth-of-type(2):BEFORE {
		background-color:green;	
	}
	.pie:nth-of-type(3):AFTER,
	.pie:nth-of-type(3):BEFORE {
		background-color:red;	
	}
	.pie:nth-of-type(4):AFTER,
	.pie:nth-of-type(4):BEFORE {
		background-color:orange;	
	}
/*
  now rotate each piece based on their cumulative starting
  position
*/
	.pie[data-start="30"] {
		-moz-transform: rotate(30deg); /* Firefox */
		-ms-transform: rotate(30deg); /* IE */
		-webkit-transform: rotate(30deg); /* Safari and Chrome */
		-o-transform: rotate(30deg); /* Opera */
		transform:rotate(30deg);
	}
	.pie[data-start="60"] {
		-moz-transform: rotate(60deg); /* Firefox */
		-ms-transform: rotate(60deg); /* IE */
		-webkit-transform: rotate(60deg); /* Safari and Chrome */
		-o-transform: rotate(60deg); /* Opera */
		transform:rotate(60deg);
	}
	.pie[data-start="100"] {
		-moz-transform: rotate(100deg); /* Firefox */
		-ms-transform: rotate(100deg); /* IE */
		-webkit-transform: rotate(100deg); /* Safari and Chrome */
		-o-transform: rotate(100deg); /* Opera */
		transform:rotate(100deg);
	}
/*
  and rotate the amount of the pie that's showing.

  NOTE: add an extra degree to all but the final piece, 
  to fill in unsightly gaps.
*/
	.pie[data-value="30"]:BEFORE {
		-moz-transform: rotate(31deg); /* Firefox */
		-ms-transform: rotate(31deg); /* IE */
		-webkit-transform: rotate(31deg); /* Safari and Chrome */
		-o-transform: rotate(31deg); /* Opera */
		transform:rotate(31deg);
	}
	.pie[data-value="40"]:BEFORE {
		-moz-transform: rotate(41deg); /* Firefox */
		-ms-transform: rotate(41deg); /* IE */
		-webkit-transform: rotate(41deg); /* Safari and Chrome */
		-o-transform: rotate(41deg); /* Opera */
		transform:rotate(41deg);
	}
	.pie[data-value="260"]:BEFORE {
		-moz-transform: rotate(260deg); /* Firefox */
		-ms-transform: rotate(260deg); /* IE */
		-webkit-transform: rotate(260deg); /* Safari and Chrome */
		-o-transform: rotate(260deg); /* Opera */
		transform:rotate(260deg);
	}
// #palette-1 {
//     .quadrant-1 {
//         background-color: $palette1q1;
//     }
//     .quadrant-2 {
//         background-color: $palette1q2;
//     }
//     .quadrant-3 {
//         background-color: $palette1q3;
//     }
//     .quadrant-4 {
//         background-color: $palette1q4;
//     }

// }
// #palette-2 {
//     .quadrant-1 {
//         background-color: $palette2q1;
//     }
//     .quadrant-2 {
//         background-color: $palette2q2;
//     }
//     .quadrant-3 {
//         background-color: $palette2q3;
//     }
//     .quadrant-4 {
//         background-color: $palette2q5;
//     }

// }
// #palette-3 {
//     .quadrant-1 {
//         background-color: $palette3q1;
//     }
//     .quadrant-2 {
//         background-color: $palette3q2;
//     }
//     .quadrant-3 {
//         background-color: $palette3q3;
//     }
//     .quadrant-4 {
//         background-color: $palette3q5;
//     }

// }
// #palette-4 {
//     .quadrant-1 {
//         background-color: $palette4q1;
//     }
//     .quadrant-2 {
//         background-color: $palette4q2;
//     }
//     .quadrant-3 {
//         background-color: $palette4q3;
//     }
//     .quadrant-4 {
//         background-color: $palette4q5;
//     }

// }
</style>