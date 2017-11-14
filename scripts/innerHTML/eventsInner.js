//Author: Paul Ellis; Purpose: return value to be set in DOM manipulation for events div

const eventsHTML = {
    "id": {
        enumerable: true,
        value: "events"
    },
    "inner": {
        enumerable: true,
        value: `
    <section class="form">
        <form name="event__form">
        <h2>Add Upcoming Events</h2>
        <label>Name</label>
            <div class="form-group col-3">
                <input type="text" name='eventForm__url' value="" id="" class="form-control" placeholder="Name of Event.">
            </div>
        <label>Date</label>
            <div class="form-group col-3">
                <input type="date" name='eventForm__date' id="" class="form-control" value="" placeholder="">
            </div>
        <label>Location</label>
            <div class="form-group col-3">
                <input type="text" name='eventForm__location' id="" class="form-control" value="" placeholder="Add a Location">
            </div>
            <div class="form-group col-3">
                <input type="button" id="eventForm__saveButt" class="event__button" value="Post event">
            </div>
        </form>
    </section>
    <div id="event__post" class="output"> 
    <br>
    <br>
    <br>
    <br>
    </div>
    `
    }
}

module.exports = eventsHTML;