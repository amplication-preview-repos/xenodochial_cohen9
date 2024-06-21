/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Workout } from "./Workout";
import { WorkoutCountArgs } from "./WorkoutCountArgs";
import { WorkoutFindManyArgs } from "./WorkoutFindManyArgs";
import { WorkoutFindUniqueArgs } from "./WorkoutFindUniqueArgs";
import { CreateWorkoutArgs } from "./CreateWorkoutArgs";
import { UpdateWorkoutArgs } from "./UpdateWorkoutArgs";
import { DeleteWorkoutArgs } from "./DeleteWorkoutArgs";
import { ExerciseFindManyArgs } from "../../exercise/base/ExerciseFindManyArgs";
import { Exercise } from "../../exercise/base/Exercise";
import { User } from "../../user/base/User";
import { WorkoutService } from "../workout.service";
@graphql.Resolver(() => Workout)
export class WorkoutResolverBase {
  constructor(protected readonly service: WorkoutService) {}

  async _workoutsMeta(
    @graphql.Args() args: WorkoutCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Workout])
  async workouts(
    @graphql.Args() args: WorkoutFindManyArgs
  ): Promise<Workout[]> {
    return this.service.workouts(args);
  }

  @graphql.Query(() => Workout, { nullable: true })
  async workout(
    @graphql.Args() args: WorkoutFindUniqueArgs
  ): Promise<Workout | null> {
    const result = await this.service.workout(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Workout)
  async createWorkout(
    @graphql.Args() args: CreateWorkoutArgs
  ): Promise<Workout> {
    return await this.service.createWorkout({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Workout)
  async updateWorkout(
    @graphql.Args() args: UpdateWorkoutArgs
  ): Promise<Workout | null> {
    try {
      return await this.service.updateWorkout({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Workout)
  async deleteWorkout(
    @graphql.Args() args: DeleteWorkoutArgs
  ): Promise<Workout | null> {
    try {
      return await this.service.deleteWorkout(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Exercise], { name: "exercises" })
  async findExercises(
    @graphql.Parent() parent: Workout,
    @graphql.Args() args: ExerciseFindManyArgs
  ): Promise<Exercise[]> {
    const results = await this.service.findExercises(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Workout): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
