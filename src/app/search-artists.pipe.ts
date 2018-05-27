import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchArtists'
})
export class SearchArtistsPipe implements PipeTransform {

	// Take data received from pipe and filter it
  transform(pipeData, pipeModifier): any {
    return pipeData.filter(eachItem => {
    	return (
    		// search by name from data.json
    		eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) || // Check against pipeModifier
    		eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase()) // Check against pipeModifier
    	)
    });
  }

}
