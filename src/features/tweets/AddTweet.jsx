export function AddTweet() {
  return (
    <div className="border-b border-gray-600 p-4">
      <div className="flex ">
        <div>
          <img
            className="rounded-full w-16 h-16"
            src="https://pbs.twimg.com/profile_images/1359769263624495105/ZA45zIUf_400x400.jpg"
            alt="user"
          />
        </div>
        <div className="w-full pr-4 pt-3">
          <textarea
            className="w-full h-20 mx-4 text-2xl text-gray-500 bg-gray-900 border-b border-gray-600"
            placeholder="What's happening"
          ></textarea>
          <div className="flex justify-end pt-4">
            <button
              className="px-8 py-2 rounded-full text-xl font-bold bg-purple"
              onClick={() => {}}
            >
              Weet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
