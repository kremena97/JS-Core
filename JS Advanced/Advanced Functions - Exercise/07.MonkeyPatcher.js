let solution = (function () {
        return {
            call: (post, command) => {
                switch (command) {
                    case 'upvote':
                        post.upvotes += 1;
                        break;
                    case 'downvote':
                        post.downvotes += 1;
                        break;
                    case 'score':
                        let upvotes;
                        let downvotes;
                        if (post.upvotes + post.downvotes > 50){
                            let number = Math.max(post.upvotes,post.downvotes) * 0.25;
                            upvotes = post.upvotes + Math.ceil(number);
                            downvotes = post.downvotes + Math.ceil(number);
                        }else{
                            upvotes = post.upvotes;
                            downvotes = post.downvotes;
                        }
                        let balance = upvotes - downvotes;
                        let raiting = '';
                        if (post.upvotes * 100 / (post.upvotes + post.downvotes) > 66 && post.upvotes + post.downvotes >=10) {
                            raiting = 'hot';
                        } else if (balance >= 0 && upvotes > 100 && downvotes > 100) {
                            raiting = 'controversial';
                        } else if (balance < 0 && post.upvotes + post.downvotes >=10) {
                            raiting = 'unpopular';
                        }else if(post.upvotes + post.downvotes <10){
                            raiting = 'new';
                        }else{
                            raiting = 'new';
                        }
                        return [upvotes, downvotes, balance, raiting];
                    default:
                        return 'Error';
                }
            }
        }
    }()
);

var forumPost = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};

// Under border case
var answer = solution.call(forumPost, 'score');
console.log(answer);
// Past border case
solution.call(forumPost, 'downvote');
answer = solution.call(forumPost, 'score');
console.log(answer);

solution.call(forumPost, 'upvote');
solution.call(forumPost, 'upvote');
answer = solution.call(forumPost, 'score');
console.log(answer);

// 38 Upvotes
for (let i = 0; i < 38; i++) {
    solution.call(forumPost, 'upvote');
}
answer = solution.call(forumPost, 'score');
console.log(answer);

// Past obfuscation threshold
solution.call(forumPost, 'downvote');
answer = solution.call(forumPost, 'score');
console.log(answer);

forumPost.upvotes = 132;
forumPost.downvotes = 68;

answer = solution.call(forumPost, 'score');
console.log(answer);