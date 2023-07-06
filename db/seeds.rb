
9.times do |i|
   Post.create!(
      title: Faker::TvShows::StarTrek.character,
      content: Faker::Lorem.paragraph_by_chars,
      image: Faker::LoremFlickr.image
   )

end