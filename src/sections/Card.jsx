

export default function Card({img,title}){

return( <div className="col-md-6">
    <div className="card mb-3">
        <div className="card-body text-center"  id="main_card">
            <div className='icon_service_div'>{img}</div>
            <h5 className="card-title new_card_title main_font">{title}</h5>
        </div>
        </div>

    </div>)




}