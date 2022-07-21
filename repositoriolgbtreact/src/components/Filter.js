function Filter() {
  return (
    <>
    <div className="filter__ret--purple content ">
			<div className="ion-icon">
				<ion-icon name="chevron-forward-outline"></ion-icon>
			</div>
			<form method="post" action="#" className="filter__form">
				<h3 className="h3">Filtro:</h3>
				<input className="checkbox" type="checkbox" name="lesbica" value="lesbica" id="lesbica"/>
				<label htmlFor="lesbica">lésbica</label><br></br>
				<input className="checkbox" type="checkbox" name="gay" id="gay" value="gay"/>
				<label htmlFor="gay">gay</label><br></br>
				<input className="checkbox" type="checkbox" name="bissexualidade" id="bissexualidade" value="bissexualidade"/>
				<label htmlFor="bissexualidade">bissexualidade</label><br></br>
				<input className="checkbox" type="checkbox" name="travestis" id="travestis" value="travestis"/>
				<label htmlFor="travestis">travestis</label><br></br>
				<input className="checkbox" type="checkbox" name="transexuais" id="transexuais" value="transexuais"/>
				<label htmlFor="transexuais">transexuais</label><br></br>
				<input className="checkbox" type="checkbox" name="pessoasTrans" id="pessoas trans" value="pessoas trans"/>
				<label htmlFor="pessoas trans">pessoas trans</label><br></br>
				<input className="checkbox" type="checkbox" name="pansexualidade" id="pansexualidade" value="pansexualidade"/>
				<label htmlFor="pansexualidade">pansexualidade</label><br></br>
				<input className="checkbox" type="checkbox" name="artigos" id="artigos" value="artigos"/>
				<label htmlFor="artigos">artigos</label><br></br>
				<input type="checkbox" name="dissertacoes" id="dissertacoes" value="dissertacoes"/>
				<label htmlFor="dissertacoes">dissertações</label><br></br>
				<input className="checkbox" type="checkbox" name="escritosPorTrans" id="escritosPorTrans" value="escritosPorTrans"/>
				<label htmlFor="escritosPorTrans">escritos por pessoas trans</label><br></br>
				<input className="checkbox" type="checkbox" name="escritoPorLGBT" id="escritoPorLGBT" value="escritoPorLGBT"/>
				<label htmlFor="escritoPorLGBT">escritos por pessoas LGBT</label><br></br>
				<input type="checkbox" name="assexualidade" id="assexualidade" value="assexualidade"/>
				<label htmlFor="assexualidade">assexualidade</label>
        <br></br>
				<input className="checkbox" type="checkbox" name="diversidade" id="diversidade" value="diversidade"/>
				<label htmlFor="diversidade">diversidade</label><br></br>
				<input className="checkbox" type="checkbox" name="lgbtfobia" id="lgbtfobia" value="lgbtfobia"/>
				<label htmlFor="lgbtfobia">lgbtfobia </label><br></br>

			</form>
		</div>
  </>
  )
};

export default Filter;