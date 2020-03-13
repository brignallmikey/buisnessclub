import React from 'react';
import Interactions from './interactions';
import Reactions from './reactions';


function ProfilePost() {
  return (
    <div className="App">
      <div className="element-container">
       <div className="element-title">
          Title
        </div>
        <div className="element-content">
          <p>Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus</p>
          {/*content pulled from another file*/}
        </div>
        < Interactions />
      </div>
    </div>
  );
}
export default ProfilePost;
