import './index.css'

const FiltersGroup = props => {
  const {
    titleSearch,
    onChangeTitleSearch,
    categoryOptions,
    onChangeCategory,
    isCategoryActivated,
    isRatingActivated,
    ratingsList,
    onChangeRating,
  } = props
  const displayActivatedCategory = isCategoryActivated
    ? 'category-style activate'
    : 'category-style'
  const displayActivatedRating = isRatingActivated
    ? 'rating-style activate'
    : 'rating-style'

  const onClickCategory = value => {
    onChangeCategory(value)
  }

  const onClickRating = value => {
    onChangeRating(value)
  }

  const onChangeTitleSearch2 = event => {
    onChangeTitleSearch(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <div>
        <input
          type="search"
          value={titleSearch}
          className="title-search"
          placeholder="Search"
          onChange={onChangeTitleSearch2}
        />
      </div>
      <div className="category-group">
        <h1 className="category-heading">Category</h1>
        <ul className="category-list">
          {categoryOptions.map(category => (
            <li className={displayActivatedCategory}>
              <p
                className="button"
                value={category.categoryId}
                onClick={onClickCategory}
              >
                {category.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="rating-group">
        <h1 className="rating-heading">Rating</h1>
        <ul className="rating-list">
          {ratingsList.map(rating => (
            <li
              value={rating.ratingId}
              className="rating-list-item"
              onClick={onClickRating}
            >
              <img src={rating.imageUrl} alt="rating" className="rating-img" />
              <p className={displayActivatedRating}> & up</p>
            </li>
          ))}
        </ul>
        <button type="button">Clear Filters </button>
      </div>
    </div>
  )
}

export default FiltersGroup
