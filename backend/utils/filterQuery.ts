import { Document, Model, Query } from "mongoose"
type Card = {
  title: string
  details: string
  date: Date
}

type queryStr = object & {
  sort?: string
}

export default class FilterQuery {
  query: Query<Card[], Card>
  queryString: queryStr
  constructor(query: Query<Card[], Card>, queryString: queryStr) {
    this.query = query
    this.queryString = queryString
  }

  sort() {
    const sortBy = this.queryString.sort
    if (sortBy) {
      this.query = this.query.sort(sortBy)
    }
    return this
  }
}
